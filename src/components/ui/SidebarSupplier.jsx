import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { AiFillDatabase } from "react-icons/ai";
import { GrTransaction } from "react-icons/gr";
import { HiDocumentReport } from "react-icons/hi";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import useAuthStore from "@/utils/authStore";

export function SidebarSupplier() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  useEffect(() => {
    const sidebar = document.getElementById("sidebar");

    const disableScroll = (event) => {
      event.preventDefault();
    };

    sidebar.addEventListener("wheel", disableScroll, { passive: false });

    return () => {
      sidebar.removeEventListener("wheel", disableScroll);
    };
  }, []);

  const logoutUser = useAuthStore((state) => state.logoutUser);

  return (
    <div
      id="sidebar"
      className="fixed h-full w-full max-w-[20rem] bg-blue-200 p-4 shadow-xl shadow-blue-gray-900/5"
    >
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Supplier
        </Typography>
      </div>
      <List>
        <Link>
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Typography color="blue-gray" className="mr-auto font-normal">
              Dashboard
            </Typography>
          </ListItem>
        </Link>

        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 2 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <AiFillDatabase className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Master Data
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <Link to={"product"}>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Data Barang
                </ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>
        <hr className="my-2 border-blue-gray-50" />

        <ListItem>
          <ListItemPrefix>
            <GrTransaction className="h-5 w-5" />
          </ListItemPrefix>
          Transaksi
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <HiDocumentReport className="h-5 w-5" />
          </ListItemPrefix>
          Laporan
        </ListItem>
        <Link to={"/login"} onClick={logoutUser}>
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </Link>
      </List>
    </div>
  );
}
