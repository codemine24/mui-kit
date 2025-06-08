import { DemoComponent1 } from "./components/demo-component1";
import { ResponsiveContainer } from "./components/reponsive-container";

export default function Page() {
  return (
    <ResponsiveContainer>
      <DemoComponent1 />
    </ResponsiveContainer>
  );
}
