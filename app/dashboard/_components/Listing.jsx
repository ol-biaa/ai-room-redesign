import { Button } from "@/components/ui/button";
import React from "react";
import { useUser } from "react";
import EmptyState from "./EmptyState";

function Listing() {
  const { user } = useUser();
  const [userRoomList, setUsersroomList] = useState([]);
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-3xl">Hello, {user?.fullName}</h2>
        <Link href={'/dashboard/create-new'}>
        <Button>+ Redesign Room</Button>
        </Link>
      </div>

      {userRoomList?.length == 0 ? <EmptyState /> : <div>{/* Listing */}</div>}
    </div>
  );
}

export default Listing;
