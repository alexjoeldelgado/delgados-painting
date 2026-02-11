import { baseURL, contact, person } from "@/resources";
import { Button, Column, Heading, Input, Meta, Row, Schema, Text } from "@once-ui-system/core";

export async function generateMetadata() {
  return Meta.generate({
    title: contact.title,
    description: contact.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(contact.title)}`,
    path: contact.path,
  });
}

export default function ContactPage() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={contact.title}
        description={contact.description}
        path={contact.path}
        image={`/api/og/generate?title=${encodeURIComponent(contact.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${contact.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column gap="m">
        <Heading variant="display-strong-m">{contact.title}</Heading>
        <Text onBackground="neutral-weak">
          Tell us a little about your project and we&apos;ll follow up with a <strong>free estimate</strong>{" "}
          and next steps.
        </Text>
      </Column>

      <Row gap="xl" s={{ direction: "column" }}>
        <Column flex={1} gap="m">
          <Heading as="h2" variant="display-strong-xs">
            Contact details
          </Heading>
          <Text variant="body-default-m">
            <strong>Phone:</strong> (407) 947-8912
          </Text>
          <Text variant="body-default-m">
            <strong>Email:</strong> <a href={`mailto:${person.email}`}>{person.email}</a>
          </Text>
          <Text variant="body-default-m">
            <strong>Service area:</strong> Orlando metro area and nearby Central Florida communities.
          </Text>
          <Text variant="body-default-m">
            <strong>Hours:</strong> Monday–Friday, 8am–5pm. Saturday appointments available for estimates.
          </Text>
          <Text variant="body-default-s" onBackground="neutral-weak">
            Adjust the phone number, service area and hours here if anything about the business changes.
          </Text>
        </Column>

        <Column flex={2}>
          <form action={`mailto:${person.email}`} method="post" encType="text/plain">
            <Column gap="m" maxWidth={24}>
              <Input id="name" name="Name" label="Name" placeholder="Your name" />
              <Input id="email" name="Email" label="Email" type="email" placeholder="you@example.com" />
              <Input
                id="phone"
                name="Phone"
                label="Phone"
                placeholder="Best number to reach you"
              />
              <Input
                id="address"
                name="Address"
                label="Project address"
                placeholder="Street, city"
              />
              <Column gap="4">
                <Text as="label" htmlFor="message" variant="body-default-m">
                  Project details
                </Text>
                <textarea
                  id="message"
                  name="Project details"
                  placeholder="Tell us about the rooms or areas, timing, and any special requests."
                  style={{
                    width: "100%",
                    minHeight: "140px",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.75rem",
                    border: "1px solid var(--neutral-alpha-weak)",
                    background: "var(--page-background)",
                    color: "var(--neutral-on-background-strong)",
                    font: "inherit",
                    resize: "vertical",
                  }}
                />
              </Column>
              <Row paddingTop="8">
                <Button type="submit" size="m">
                  Send message
                </Button>
              </Row>
              <Text variant="body-default-xs" onBackground="neutral-weak">
                This form opens your email app to send the details directly to us. If it doesn&apos;t work,
                you can always email{" "}
                <a href={`mailto:${person.email}`} style={{ textDecoration: "underline" }}>
                  {person.email}
                </a>{" "}
                instead.
              </Text>
            </Column>
          </form>
        </Column>
      </Row>
    </Column>
  );
}

