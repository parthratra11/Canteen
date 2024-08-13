function AddItems() {
  return <p>Add Items</p>;
}

function UpdateItems() {
  return <p>Update Items</p>;
}

function ListOffers() {
  return <p>List Offers</p>;
}

function PendingDeliveries() {
  return <p>Pending Deliveries</p>;
}

function CompletedDeliveries() {
  return <p>Completed Deliveries</p>;
}

export default function OutletHomepage() {
  return (
    <>
      <h1>Outlet Page</h1>
      <div>
        <PendingDeliveries />
        <CompletedDeliveries />
        <AddItems />
        <UpdateItems />
        <ListOffers />
      </div>
    </>
  );
}
