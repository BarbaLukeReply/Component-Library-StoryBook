import React from "react";
import "../../tailwind.css";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { MenuItem } from "../header/Header";

export type SidebarProps = {
  menuItems?: MenuItem[];
};

const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  return (
    <React.Fragment>
      <div className="w-64 bg-[#ffffff] text-gray-800 overflow-auto py-2">
        {menuItems?.map((item, index) => {
          return (
            <Accordion
              selectionMode={"single"}
              isCompact={true}
              showDivider={false}
              key={index}
            >
              {item.accordion ? (
                <AccordionItem
                  key={index}
                  aria-label={item.name}
                  title={item.name}
                  classNames={{
                    content: "pl-2",
                  }}
                >
                  {item.subMenuItems.map((subItem, subIndex) => {
                    return (
                      <Accordion
                        selectionMode={"single"}
                        isCompact={true}
                        showDivider={false}
                        key={subIndex}
                      >
                        <AccordionItem
                          key={subIndex}
                          aria-label={subItem.name}
                          title={subItem.name}
                          hideIndicator={true}
                          disableAnimation={true}
                          classNames={{
                            content: "p-0 h-0",
                          }}
                        />
                      </Accordion>
                    );
                  })}
                </AccordionItem>
              ) : (
                <AccordionItem
                  key={index}
                  aria-label={item.name}
                  title={item.name}
                  hideIndicator={true}
                  disableAnimation={true}
                  classNames={{
                    content: "p-0 h-0",
                  }}
                />
              )}
            </Accordion>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
