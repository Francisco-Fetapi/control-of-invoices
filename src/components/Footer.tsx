import {
  Center,
  Footer as FooterMantine,
  Group,
  MediaQuery,
  Text,
  Breadcrumbs,
} from "@mantine/core";
import Link from "next/link";

export default function Footer() {
  const copyrights = (
    <Text size="xs">
      Sistema de Emissão de Notas Fiscais - &copy; Todos os direitos reservados
    </Text>
  );

  return (
    <FooterMantine height={60} p="md">
      <Center>{copyrights}</Center>
    </FooterMantine>
  );
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link href={href}>
      <Text variant="link" size="sm" style={{ cursor: "pointer" }}>
        {children}
      </Text>
    </Link>
  );
}
