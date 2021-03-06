import {
  Form,
  Link,
  useActionData,
  useSearchParams,
  useTransition,
} from 'remix';
import type { LoaderFunction } from 'remix';

type LoaderData = {};

export const loader: LoaderFunction = async ({
  request,
}): Promise<Response | LoaderData> => {
  // const user = await getUser(request);
  // if (user) return redirect('/');
  return {};
};

export default function Login() {
  const actionData = useActionData();
  const [searchParams] = useSearchParams();

  const transition = useTransition();

  return (
    <div className='flex justify-center items-center h-[80vh]'>
      <section className='max-w-2xl p-6 mx-auto bg-primary text-primary-content rounded-md shadow-md'>
        <h2 className='text-center text-lg font-semibold  capitalize'>
          Login Form
        </h2>

        <Form
          method='post'
          aria-describedby={actionData?.formError ? 'form-error' : undefined}
          action='/api/login'
        >
          <input
            type='hidden'
            name='redirectTo'
            value={searchParams.get('redirectTo') ?? undefined}
          />
          <div className='grid grid-cols-1 gap-6 mt-4'>
            <p id='form-error' className='text-error'>
              {actionData?.formError && (actionData?.formError as string)}
            </p>
            <div className='flex flex-col gap-1'>
              <label className='' htmlFor='email'>
                Email Address
              </label>
              <input
                name='email'
                type='email'
                className='input input-bordered'
                aria-invalid={
                  Boolean(actionData?.fieldErrors?.email) || undefined
                }
                aria-describedby={
                  actionData?.fieldErrors?.email ? 'email-error' : undefined
                }
              />
              <p id='email-error' className='text-error'>
                {actionData?.fieldErrors?.email &&
                  (actionData?.fieldErrors?.email as string)}
              </p>
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor='password'>Password</label>
              <input
                name='password'
                type='password'
                className='input input-bordered'
                aria-invalid={
                  Boolean(actionData?.fieldErrors?.password) || undefined
                }
                aria-describedby={
                  actionData?.fieldErrors?.password
                    ? 'password-error'
                    : undefined
                }
              />

              <p id='password-error' className='text-error'>
                {actionData?.fieldErrors?.password &&
                  (actionData?.fieldErrors?.password as string)}
              </p>
            </div>
          </div>

          <div className='w-full grid grid-cols-2 mt-6 gap-2'>
            <button type='submit' className='btn btn-secondary'>
              {transition.state === 'submitting' ? 'Submitting' : 'Submit'}
            </button>
            <button className='btn btn-neutral btn-outline'>
              <Link to='/' className='flex-1'>
                Cancel
              </Link>
            </button>
          </div>
        </Form>
      </section>
    </div>
  );
}
