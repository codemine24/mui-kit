import { notFound } from "next/navigation";
import { JSX } from "react";
import { elementsArr } from "../constants/elements";
import { AccordionView } from "../view/accordion-view";
import { AlertView } from "../view/alert-view";
import { AvatarView } from "../view/avatar-view";
import { ButtonView } from "../view/button-view";
import { CardView } from "../view/card-view";
import { PopoverView } from "../view/popover-view";

export async function generateStaticParams() {
  return elementsArr.map((element) => ({
    slug: element.path?.split("/").pop(),
  }));
}

// ***********************************************
//            Add new Components here
// ***********************************************
const componentMap: Record<string, JSX.Element> = {
  accordion: <AccordionView />,
  alert: <AlertView />,
  button: <ButtonView />,
  avatar: <AvatarView />,
  card: <CardView />,
  popover: <PopoverView />,
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const component = componentMap[slug];
  if (!component) return notFound();

  return component;
}
