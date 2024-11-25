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

export function SidebarStakeHolder() {
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
          Stakeholder
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
        <Link to={"/stakeholder/transaction"}>
          <ListItem>
            <ListItemPrefix>
              <GrTransaction className="h-5 w-5" />
            </ListItemPrefix>
            Transaksi
          </ListItem>
        </Link>
        <Link to={"/stakeholder/report"}>
          <ListItem>
            <ListItemPrefix>
              <HiDocumentReport className="h-5 w-5" />
            </ListItemPrefix>
            Laporan
          </ListItem>
        </Link>
        <hr className="my-2 border-blue-gray-50" />
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
