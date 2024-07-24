"use client";
import Image from "next/image";
import { Button, Dropdown, Icon, Navbar } from "react-bulma-components";

import "./header.css";

export default function Header() {
  return (
    <header>
      <Navbar>
        <Navbar.Brand>
          <Navbar.Item href='#'>
            <Image
              className='navbar-brand'
              src='/desktop-logo.png'
              alt='desktop-logo'
              width={196}
              height={40}
            />
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>

        <Navbar.Menu>
          <Navbar.Container>
            <div>
              <Image
                src='/map-marker-icon.png'
                alt='map-marker-icon'
                width={11.67}
                height={14.33}
              />
              <div>
                <div>Брест, ул. Гоголя 2, офис 1</div>
                <div>Посмотреть на карте</div>
              </div>
            </div>
            <div>
              <Image
                src='/viber-icon.png'
                alt='viber-icon'
                width={36}
                height={36}
              />
              <Image
                src='/whatsapp-icon.png'
                alt='viber-icon'
                width={36}
                height={36}
              />
              <Image
                src='/telegram-icon.png'
                alt='telegram-icon'
                width={36}
                height={36}
              />
            </div>
            <div>
              <div>
                <Image
                  src='/phone-icon.png'
                  alt='phone-icon'
                  width={11.67}
                  height={11.67}
                />
                +375 (29) 200-10-80
              </div>
              <div>
                <Image
                  src='/phone-icon.png'
                  alt='phone-icon'
                  width={11.67}
                  height={11.67}
                />
                8 (0162) 93-20-50
              </div>
            </div>
            <Button className='button'>Заказать звонок</Button>
            <Button className='primary-button'>Продать недвижимость</Button>
            <Dropdown
              closeOnSelect={false}
              color=''
              value='BYN'
              label='BYN'
              icon={
                <Icon className='icon is-small'>
                  <i aria-hidden='true' className='fas fa-angle-down' />
                </Icon>
              }
            >
              <Dropdown.Item renderAs='a' value='BYN'>
                BYN
              </Dropdown.Item>
              <Dropdown.Item renderAs='a' value='RUB'>
                RUB
              </Dropdown.Item>
              <Dropdown.Item renderAs='a' value='USD'>
                USD
              </Dropdown.Item>
            </Dropdown>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
      <div>dropdowns</div>
    </header>
  );
}
