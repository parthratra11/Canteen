export default function ListOffers() {
  const handleSubmit = (event) => {
    event.prevent.default();
    addOffers(); //! CHECK WHETHER VALID OR NOT, THEN PROCEED
  };

  function addOffers() {}

  function ListExistingOffers() {
    return <div>Existing offers (in list format)</div>;
  }
  return (
    <>
      <ListExistingOffers />
      <div>
        Add Offer:
        <form onSubmit={handleSubmit}>
          <input type="text"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
