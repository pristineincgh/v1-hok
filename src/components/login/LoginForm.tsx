'use client';

import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import SavedEmailCard from './SavedEmailCard';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Eye, EyeOff, MoveRight } from 'lucide-react';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';
import Link from 'next/link';
// import { useLogin } from '@/services/auth/mutation';
import SubmitButton from '../shared/SubmitBtn';
import { loginRequestSchema } from '@/validations/auth-validation';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [storedEmail, setStoredEmail] = useState<string | null>(null);

  // Retrieve email from localStorage
  useEffect(() => {
    const emailFromStorage = localStorage.getItem('email');
    if (emailFromStorage) {
      setStoredEmail(emailFromStorage);
    } else {
      // If no email in storage, show form immediately
      setShowForm(true);
    }
  }, []);

  const form = useForm<LoginRequestInput>({
    mode: 'all',
    resolver: zodResolver(loginRequestSchema),
    defaultValues: {
      email: storedEmail || '',
      password: '',
    },
  });

  // Update form email when storedEmail changes
  useEffect(() => {
    if (storedEmail) {
      form.setValue('email', storedEmail);
    }
  }, [storedEmail, form]);

  // const { mutate: loginUser, isPending } = useLogin();

  const onFormSubmit = (credentials: LoginRequestInput) => {
    // TODO: Call the login mutation with the credentials
    console.log('Logging in with:', credentials);
    // loginUser(credentials);

    // Save email to localStorage
    localStorage.setItem('email', credentials.email);
  };

  return (
    <div>
      {storedEmail && !showForm ? (
        <div className="space-y-4">
          <SavedEmailCard email={storedEmail} />

          <div>
            <Button
              type="button"
              size="lg"
              className="w-full rounded-full h-12"
              onClick={() => setShowForm(!showForm)}
            >
              Continue
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <div className="h-px w-full bg-muted/40" />
            <span className="px-4 text-muted">or</span>
            <div className="h-px w-full bg-muted/40" />
          </div>
          <div className="flex justify-center">
            <Button
              type="button"
              variant="link"
              onClick={() => {
                setShowForm(true);
                setStoredEmail(null);
                form.setValue('email', '');
                localStorage.removeItem('email');
              }}
              className="text-muted"
            >
              Sign in with a different email
            </Button>
          </div>
        </div>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onFormSubmit)}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="space-y-2">
                      <FormLabel
                        htmlFor="email"
                        className="text-muted xl:text-muted-foreground"
                      >
                        Email
                      </FormLabel>
                      <Input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        {...field}
                        aria-invalid={!!form.formState.errors.email}
                        className={cn(
                          'rounded-full',
                          form.formState.errors.email
                            ? 'bg-destructive/10 text-background lg:text-foreground'
                            : 'bg-muted border-none text-foreground'
                        )}
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="pl-3" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <FormLabel
                          htmlFor="password"
                          className="text-muted xl:text-muted-foreground"
                        >
                          Password
                        </FormLabel>

                        <Link
                          href="/reset-request"
                          className="text-muted xl:text-muted-foreground text-sm hover:underline"
                        >
                          Forgot Password?
                        </Link>
                      </div>
                      <div className="relative group">
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          id="password"
                          placeholder="Enter your password"
                          {...field}
                          aria-invalid={!!form.formState.errors.password}
                          autoFocus={!!storedEmail}
                          className={cn(
                            'rounded-full pr-16',
                            form.formState.errors.password
                              ? 'bg-destructive/10 text-background'
                              : 'bg-muted text-foreground'
                          )}
                        />
                        <Button
                          type="button"
                          size="icon"
                          variant="ghost"
                          className="hover:bg-transparent text-muted-foreground absolute right-5 top-1/2 -translate-y-1/2 group-hover:text-muted-foreground group-focus-within:text-muted-foreground transition-all duration-300 ease-in-out [&_svg:not([class*='size-'])]:size-5"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff /> : <Eye />}
                        </Button>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage className="pl-3" />
                </FormItem>
              )}
            />

            <div>
              <SubmitButton
                label="Continue"
                // loading={isPending}
                icon={<MoveRight />}
                disabled={
                  // isPending ||
                  form.formState.isSubmitting ||
                  (!form.formState.isValid && form.formState.isDirty)
                }
                className="rounded-full"
              />
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};
export default LoginForm;
