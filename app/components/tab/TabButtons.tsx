import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
const TabButtons = () => {
  return (
    <TabGroup defaultIndex={0} className={"max-w-4xl container mx-auto "}>
      <TabList className="grid  grid-cols-3 items-center py-3 px-2 text-textColor text-xl rounded-full ring-4 ring-primary gap-4 bg-secondary ">
        <Tab className={"border-r-2  border-bg-secondary rounded-2xl"}>
          About
        </Tab>
        <Tab className={"border-r-2 border-bg-secondary rounded-2xl"}>
          Article
        </Tab>
        <Tab className={"border-r-2 border-bg-secondary rounded-2xl"}>
          Projects
        </Tab>
      </TabList>
      <TabPanels>
        <div className="bg-green-200 text-black">
          <TabPanel>Content 1</TabPanel>
        </div>
        <div className="bg-green-200 text-black">
          <TabPanel>Content 2</TabPanel>
        </div>
        <div className="bg-green-200 text-black">
          <TabPanel>Content 3</TabPanel>
        </div>
      </TabPanels>
    </TabGroup>
  );
};

export default TabButtons;
