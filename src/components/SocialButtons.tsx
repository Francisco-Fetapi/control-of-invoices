import { Button, ButtonProps, Group } from '@mantine/core';
import { GoogleIcon } from 'assets/GoogleIcon';
import { FacebookIcon } from 'assets/FacebookIcon';

export function GoogleButton(props: ButtonProps) {
  return <Button leftIcon={<GoogleIcon />} variant="default" color="gray" {...props} />;
}

export function FacebookButton(props: ButtonProps) {
  return (
    <Button
      leftIcon={<FacebookIcon />}
      sx={(theme) => ({
        backgroundColor: '#4267B2',
        color: '#fff',
        '&:hover': {
          backgroundColor: theme.fn.darken('#4267B2', 0.1),
        },
      })}
      {...props}
    />
  );
}



export function SocialButtons() {
  return (
    <Group position="center" sx={{ padding: 15 }}>
      <GoogleButton>Google</GoogleButton>
      <FacebookButton>Facebook</FacebookButton>
    </Group>
  );
}
