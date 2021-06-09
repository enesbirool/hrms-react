import React from "react";
import { Container, Button, Menu, Icon, Dropdown } from 'semantic-ui-react';
import "../App.css";

export default function Navi() {
    return (
        <div>
            <Container>
                <Menu size="large" inverted>
                    <Container>
                        <Menu.Item name="Ana Sayfa">
                            <Icon name="home" />Ana Sayfa
          </Menu.Item>
                        <Menu.Item name="ilanlar" />
                        <Menu.Item name="Belgeler" />
                        <Dropdown item text='Haberler'>
                            <Dropdown.Menu>
                                <Dropdown.Item>İş Veren</Dropdown.Item>
                                <Dropdown.Item>İş Arayan</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Menu.Menu position="right">
                        <Dropdown item text='Dil'>
                            <Dropdown.Menu>
                                <Dropdown.Item>English</Dropdown.Item>
                                <Dropdown.Item>Russian</Dropdown.Item>
                                <Dropdown.Item>Spanish</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                            <Button.Group>
                                <Button>Giris yap</Button>
                                <Button.Or />
                                <Button positive>Kaydol</Button>
                            </Button.Group>
                        </Menu.Menu>
                    </Container>
                </Menu>
            </Container>
        </div>
    );
}