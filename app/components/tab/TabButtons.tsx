import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import AboutTab from "../about/AboutTab";
import ArticlesTab from "../articles/ArticlesTab";
import Projects from "../projects/Projects";
const TabButtons = () => {
  return (
    <TabGroup
      defaultIndex={0}
      className={"max-w-4xl container mx-auto shadow-sm "}
    >
      <TabList className="grid  grid-cols-3 items-center py-3 px-2 text-textColor text-xl rounded-full ring-4 ring-primary gap-4 bg-secondary ">
        <Tab className={"border-r-2  border-bg-secondary rounded-2xl"}>
          About
        </Tab>
        <Tab className={"border-r-2 border-bg-secondary rounded-2xl "}>
          Article
        </Tab>
        <Tab className={"border-r-2 border-bg-secondary rounded-2xl"}>
          Projects
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel className={"p-4 text-textColor text-lg "}>
          <AboutTab />
        </TabPanel>

        <TabPanel className={"p-4 text-textColor text-lg "}>
          <div className="grid grid-col-3 ">
            <ArticlesTab />
          </div>
        </TabPanel>

        <TabPanel className={"p-4 text-textColor text-lg "}>
          <Projects />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
};

export default TabButtons;
