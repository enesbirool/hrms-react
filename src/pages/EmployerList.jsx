import React from "react";
import { useState, useEffect } from "react";
import { Table, Header, Icon } from "semantic-ui-react";

export default function EmployerList() {
    return (
        <div>
          <Header as="h2">
            <Icon name="list alternate outline" />
            <Header.Content>Employers</Header.Content>
          </Header>
          <Table color="blue" key="blue">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>İs Verenler</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
    
            <Table.Body>
            </Table.Body>
          </Table>
        </div>
      );
}
