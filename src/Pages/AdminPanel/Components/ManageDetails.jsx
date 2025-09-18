import "./ManageDetails.css";

function ManageDetails() {
  return (
    <div className="ManageDetailsContain">
      <div className="ManageDetails">
        <h4> Manage Details</h4>
        <p>Books</p>
        <p>Members</p>
      </div>
      <div className="NewArrival" >
        <button type="button" class="ManageDetailsContainbtn btn btn-primary btn-lg">Add New Arrival</button>
      </div>
    </div>
  );
}

export default ManageDetails;
