import { baseURL, clients, person } from "@/resources";
import { Column, Meta, Schema } from "@once-ui-system/core";
import { ClientPortal } from "@/components/clients/ClientPortal";

export async function generateMetadata() {
  return Meta.generate({
    title: clients.title,
    description: clients.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(clients.title)}`,
    path: clients.path,
  });
}

export default function ClientsPage() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={clients.title}
        description={clients.description}
        path={clients.path}
        image={`/api/og/generate?title=${encodeURIComponent(clients.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${clients.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <ClientPortal />
    </Column>
  );
}

