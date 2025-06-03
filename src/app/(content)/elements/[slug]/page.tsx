import { ComingSoon } from "@/components/coming-soon";
import { elementsArr } from "@/router/router";
import { JSX } from "react";
import { AccordionView } from "../view/accordion-view";
import { AlertView } from "../view/alert-view";
import { AvatarView } from "../view/avatar-view";
import { BreadcrumbsView } from "../view/breadcrumbs-view";
import { ButtonView } from "../view/button-view";
import { CardView } from "../view/card-view";
import { DialogView } from "../view/dialog-view";
import { DrawerView } from "../view/drawer-view";
import { PaginationView } from "../view/pagination-view";
import { PopoverView } from "../view/popover-view";
import { StepperView } from "../view/stepper-view";
import { TimelineView } from "../view/timeline-view";

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
  breadcrumb: <BreadcrumbsView />,
  button: <ButtonView />,
  avatar: <AvatarView />,
  drawer: <DrawerView />,
  dialog: <DialogView />,
  card: <CardView />,
  pagination: <PaginationView />,
  popover: <PopoverView />,
  timeline: <TimelineView />,
  stepper: <StepperView />,
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const component = componentMap[slug];
  if (!component) return <ComingSoon returnUrl="/elements" />;

  return component;
}
