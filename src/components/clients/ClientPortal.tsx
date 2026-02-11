"use client";

import { useState } from "react";
import { Button, Column, Heading, Input, Row, Text } from "@once-ui-system/core";
import { clients } from "@/resources";
import siteData from "@/resources/site-data.json";

type ClientProject = {
  code: string;
  name: string;
  address: string;
  startDate: string;
  status: string;
  notes?: string;
};

// All client projects are managed in src/resources/site-data.json
const PROJECTS: ClientProject[] = siteData.clientProjects;

export const ClientPortal: React.FC = () => {
  const [code, setCode] = useState("");
  const [project, setProject] = useState<ClientProject | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const trimmed = code.trim().toUpperCase();

    if (!trimmed) {
      setProject(null);
      setError("Enter the project code we sent you.");
      return;
    }

    const match = PROJECTS.find((p) => p.code.toUpperCase() === trimmed);
    if (!match) {
      setProject(null);
      setError("We couldn’t find a project with that code. Double‑check the code on your estimate or email.");
      return;
    }

    setProject(match);
    setError(null);
  };

  return (
    <Column gap="xl" fillWidth maxWidth="m">
      <Column gap="m">
        <Heading variant="display-strong-m">{clients.title}</Heading>
        <Text onBackground="neutral-weak">{clients.description}</Text>
        <Text variant="body-default-s" onBackground="neutral-weak">
          Use the code from your estimate or confirmation email (for example{" "}
          <strong>SMITH-INT-0426</strong>) to see the current status and planned start date.
        </Text>
      </Column>

      <form onSubmit={handleSubmit}>
        <Column gap="m" maxWidth={24}>
          <Input
            id="project-code"
            name="project-code"
            label="Project code"
            placeholder="Enter your project code"
            value={code}
            onChange={(event) => setCode(event.target.value)}
          />
          <Row gap="8">
            <Button type="submit" size="m">
              Check project
            </Button>
            <Text variant="body-default-s" onBackground="neutral-weak">
              If you can’t find your code, just call{" "}
              <strong>(407) 947-8912</strong> or{" "}
              <a href="mailto:info@delgadospainting.com">email us</a> and we’ll help.
            </Text>
          </Row>
          {error && (
            <Text variant="body-default-s" onBackground="accent-weak">
              {error}
            </Text>
          )}
        </Column>
      </form>

      {project && (
        <Column
          gap="m"
          padding="l"
          radius="l"
          border="neutral-alpha-weak"
          background="surface"
          maxWidth={24}
        >
          <Heading as="h2" variant="display-strong-xs">
            {project.name}
          </Heading>
          <Text variant="body-default-m">
            <strong>Project code:</strong> {project.code}
          </Text>
          <Text variant="body-default-m">
            <strong>Address:</strong> {project.address}
          </Text>
          <Text variant="body-default-m">
            <strong>Planned start:</strong> {project.startDate}
          </Text>
          <Text variant="body-default-m">
            <strong>Status:</strong> {project.status}
          </Text>
          {project.notes && (
            <Text variant="body-default-m" onBackground="neutral-weak">
              {project.notes}
            </Text>
          )}
          <Text variant="body-default-s" onBackground="neutral-weak">
            Dates may shift slightly based on weather and earlier jobs wrapping up. We’ll always confirm with
            you before we start.
          </Text>
        </Column>
      )}
    </Column>
  );
};

