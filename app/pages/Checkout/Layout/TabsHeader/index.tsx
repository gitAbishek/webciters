import { Fragment } from "react";
import { Circle, Line, StackFullWidth } from "./styled";
import { Link } from "~/components/Link";

type Tab = {
  label: string;
  isActive: boolean;
  route: string;
};

type Props = {
  tabs: Tab[];
};

export function TabsHeader({ tabs }: Props) {
  const activeTabIndex = tabs.findIndex((tab) => tab.isActive);

  return (
    <StackFullWidth pl={4} pr={4} align="center" mt={5}>
      {tabs.map((tab, i) => (
        <Fragment key={tab.label}>
          {i < activeTabIndex ? (
            <Link to={tab.route}>
              <Circle isActive={i <= activeTabIndex} name={tab.label} />
            </Link>
          ) : (
            <Circle isActive={i <= activeTabIndex} name={tab.label} />
          )}

          {i !== tabs.length - 1 && (
            <Line isActive={i < activeTabIndex} name={tab.label} />
          )}
        </Fragment>
      ))}
    </StackFullWidth>
  );
}
