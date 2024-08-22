import { useState } from "react";

export default function ListOffers() {
  const [offer, setOffer] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addOffers(); // TODO: CHECK WHETHER VALID OR NOT, THEN PROCEED
    setOffer("");
  };

  function addOffers() {
    // TODO: ADD THE NEW OFFER IN THE EXISTING OFFERS
    alert("offer submitted");
  }

  // TODO: DISPLAYS THE ALREADY EXISTING OFFERS
  function ListExistingOffers() {
    return <div>Existing offers (in list format)</div>;
  }
  return (
    <>
      <ListExistingOffers />
      {/* FORM TO ADD OFFER */}
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

          {/* IMPLEMENT THE BUTTON TO SUBMIT THE LIST-OFFERS FORM */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
