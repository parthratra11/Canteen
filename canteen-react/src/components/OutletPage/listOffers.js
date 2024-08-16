import { useState } from "react";

export default function ListOffers() {
  const [offer, setOffer] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addOffers(); //! CHECK WHETHER VALID OR NOT, THEN PROCEED
    setOffer("");
  };

  function addOffers() {
    // ADD THE NEW OFFER IN THE EXISTING OFFERS
    alert("offer submitted");
  }

  function ListExistingOffers() {
    return <div>Existing offers (in list format)</div>;
  }
  return (
    <>
      <ListExistingOffers />
      <div>
        Add Offer:
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={offer}
            onChange={(e) => {
              setOffer(e.target.value);
            }}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
