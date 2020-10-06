import React, { FC } from "react";
import { selectedMenuItem } from "../config/recoil-state";
import { ContentPanel, PanelContainer, SidebarPanel, ViewBase } from "./layout";
import { Menu } from "./menu";

const View: FC<any> = () => {
  return (
    <ViewBase>
      <PanelContainer>
        <SidebarPanel>
          <Menu />
        </SidebarPanel>
        <ContentPanel>
          <div>
            Media Panel Importer TeeEss! Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed nunc est, laoreet nec interdum interdum,
            sollicitudin eu purus. Vestibulum dictum sem consectetur, auctor
            elit in, auctor quam. Donec mollis ex libero, pulvinar vehicula nisl
            eleifend sit amet. Curabitur at tincidunt quam. Aliquam mauris
            magna, imperdiet vel nisi cursus, porttitor mollis velit. Sed
            blandit eget magna ut porta. Mauris in mi ante. Nulla iaculis sem at
            velit tempus pretium. Maecenas volutpat tristique risus, quis
            vestibulum ipsum elementum vel. Cras sodales porttitor volutpat.
            Nullam vulputate nisi vitae augue porttitor, sed cursus elit
            posuere. Integer in imperdiet purus, eget interdum massa. Vivamus
            aliquam libero sit amet lacinia aliquet. Integer viverra in arcu a
            faucibus. Mauris ut consequat nibh, eu hendrerit est. Integer
            placerat feugiat diam. Ut tellus nunc, iaculis eu ligula iaculis,
            auctor egestas arcu. In hac habitasse platea dictumst. Aliquam erat
            volutpat. Aliquam laoreet venenatis lacus sit amet porta. Nunc quis
            volutpat lacus. Etiam ut dapibus risus, eu ullamcorper nunc. Donec
            porttitor, massa nec rutrum faucibus, mi turpis gravida purus, sed
            ullamcorper dui dui in velit. Cras et mauris id nibh vulputate
            tempus sed non lorem. Nulla vehicula libero ut consequat elementum.
            Aenean convallis justo sed magna condimentum lobortis. Aliquam erat
            volutpat. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. In hac habitasse platea
            dictumst. Quisque fringilla sem vitae mi luctus, non aliquet massa
            scelerisque. Aliquam in justo eu elit tincidunt malesuada a ac
            metus. Aenean nec elementum urna. Aliquam vitae lacinia lorem, at
            consectetur ex. Quisque venenatis euismod ex eget pharetra.
            Curabitur vulputate auctor consectetur. Nulla velit odio, convallis
            aliquet risus sed, euismod elementum tellus. Duis id imperdiet
            felis. Ut ut elit eget nunc euismod posuere sit amet vitae nulla.
            Nulla facilisi. Praesent at lorem ultricies turpis tempor dapibus ut
            sed libero. Donec nisl nulla, feugiat eget nisl vel, congue vehicula
            orci. Aliquam ut nisl sit amet velit elementum vehicula mattis nec
            massa. Morbi consectetur, lacus in finibus aliquet, elit diam cursus
            purus, at ornare risus libero ac ex. Praesent egestas elit eget
            bibendum interdum. Cras laoreet elit neque, vel convallis lorem
            ultrices nec. Fusce consequat convallis suscipit. Aliquam cursus sed
            leo et dapibus. Donec et nunc facilisis, facilisis magna et,
            ultricies odio. Morbi venenatis vehicula erat. Ut sed bibendum
            mauris. Cras vel cursus dolor, vel sodales magna. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Pellentesque eu vestibulum quam. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Curabitur enim dui, ultrices quis sapien et, auctor
            mollis purus. Proin ipsum justo, mattis quis ante ac, vehicula
            ullamcorper sapien. Mauris suscipit accumsan odio, eget dignissim
            est malesuada ac. In aliquam mi ut posuere consectetur. Ut odio
            justo, luctus lacinia tincidunt eget, commodo a magna. Curabitur
            condimentum, ipsum eu sodales fermentum, odio augue fermentum dui,
            tincidunt luctus enim dui nec lectus. Aliquam laoreet accumsan elit,
            eu ornare risus aliquet sed. Morbi nisi diam, pretium in ultrices
            vel, pharetra in mauris. Aliquam sollicitudin elit elit, in placerat
            ipsum feugiat sed.
          </div>
        </ContentPanel>
      </PanelContainer>
    </ViewBase>
  );
};

export { View };
