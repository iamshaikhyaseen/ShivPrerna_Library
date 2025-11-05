import  { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddMember.css";
import { privateApi } from "../../../axiosConfig.js";
import { toast, ToastContainer } from "react-toastify";

function AddMember() {
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMember, setSelectedMember] = useState(null);
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [loading,setLoading]=useState(true);
  const [memberForm, setMemberForm] = useState({
    id: 0,
    name: "",
    phoneNo: "",
    email: "",
    address: "",
  });
 
  useEffect(()=>{
      const fetchMembers=async ()=>{
        try{
          setLoading(true);
          const response=await privateApi.get("/members/all");
          console.log(response.data);
          if(Array.isArray(response.data)){
            setMembers(response.data);
          }else{
            setMembers([]);
          }
        }
        catch(err){
          console.error("Error fetching members",err);
          setMembers([]);
        }
        finally{
          setLoading(false);
        }
      };
      fetchMembers();
    },[]);

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openAddPopup = () => {
    setIsUpdateMode(false);
    setMemberForm({ id: "", name: "", phoneNo: "", email: "", address: "" });
    setShowAddPopup(true);
  };

  const openUpdatePopup = () => {
    if (!selectedMember) {
      toast.warn("Please select a Membber");
      // alert("Please select a Member");
      return;
    }
    setIsUpdateMode(true);
    setMemberForm({
  id: selectedMember.id || "",
  name: selectedMember.name || "",
  phoneNo: selectedMember.phoneNo || "",
  email: selectedMember.email || "",
  address: selectedMember.address || "",
});
    setShowAddPopup(true);
  };

  const handleSaveMember = async () => {
    if (
      !memberForm.name ||
      !memberForm.phoneNo ||
      !memberForm.email ||
      !memberForm.address
    ) {
      toast.warn("Please fill all the fileds!");
      return;
    }
    const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(memberForm.phoneNo)) {
        toast.warn("Phone number must be a 10-digit number!");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(memberForm.email)) {
        toast.warn("Please enter a valid email address!");
        return;
      }

    if (isUpdateMode) {

    try{
            const memberObject={name:memberForm.name,phoneNo:memberForm.phoneNo,email:memberForm.email,address:memberForm.address};
            const response=await privateApi.put(`/members/update/${memberForm.id}`,memberObject);
            setMembers(members.map(b => (b.id === memberForm.id ? response.data : b)));
            toast.success("Member updated successfully!");
          }catch(err){
            console.error("Error Adding Member: "+err);
            toast.error("Unable to update member");
          }
    } else {
    try{
            const memberObject={id:memberForm.id,name:memberForm.name,phoneNo:memberForm.phoneNo,email:memberForm.email,address:memberForm.address};
            const response=await privateApi.post("/members/add",memberObject);
            setMembers([...members,response.data]);
            toast.success("Member added successfully!");
          }catch(err){
            console.error("Error Adding Member: "+err);
            toast.error("Unable to add member!");
          }
    }

    setShowAddPopup(false);
    setSelectedMember(null);
    setMemberForm({ id: "", name: "", phoneNo: "", email: "", address: "" });
  };

  const handleSelectMember = (member) => {
    setSelectedMember(member);
  };

  const handleDeleteMember = async () => {
    if (!selectedMember) {
      toast.warn("Please select a Membber");
      return;
    }

    try{
          const response=await privateApi.delete(`/members/${selectedMember.id}`);
          setMembers(members.filter(b => b.id !== selectedMember.id));
          toast.success("Member deleted successfully!");
        }catch(err){
          console.error("Member delete failed: "+err);
          toast.error("Unable to delete Member");
        }
  };

  return (
    <div className="allbooks-container">
    <ToastContainer position="bottom-right" autoClose={2000} />
      <h2 className="mb-4 text-center">Manage Members</h2>

      <input
        type="text"
        className="books-search"
        placeholder="Search by name or email..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="btn btn-success" onClick={openAddPopup}>
          Add-Members
        </button>
        <button className="btn btn-warning" onClick={openUpdatePopup}>
          Update
        </button>
        <button className="btn btn-danger" onClick={handleDeleteMember}>
          Delete
        </button>
      </div>

      {/* Members Table */}
      <div className="table-container">
        <table className="books-table table table-striped table-hover">
          <thead>
            <tr>
              <th>M.Id</th>
              <th>Name</th>
              <th>Number</th>
              <th>Email</th>
              <th>Address</th>
              <th>Select</th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.length > 0 ? (
              filteredMembers.map((member) => (
                <tr
                  key={member.id}
                  className={selectedMember?.id === member.id ? "selected-row" : ""}
                >
                  <td>{member.id}</td>
                  <td>{member.name}</td>
                  <td>{member.phoneNo}</td>
                  <td>{member.email}</td>
                  <td>{member.address}</td>
                  <td>
                    <button
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => handleSelectMember(member)}
                    >
                      Select
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No member found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add / Update Member Popup */}
      {showAddPopup && (
        <div className="popup-overlay">
          <div className="popup-content-column">
            <h5>{isUpdateMode ? "Update Member" : "Add New Member"}</h5>
            <input
              type="text"
              placeholder="Member ID"
              value={memberForm.id}
              onChange={(e) => setMemberForm({ ...memberForm, id: e.target.value })}
              disabled
            />
            <input
              type="text"
              placeholder="Name"
              value={memberForm.name}
              onChange={(e) => setMemberForm({ ...memberForm, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Number"
              value={memberForm.phoneNo}
              onChange={(e) => setMemberForm({ ...memberForm, phoneNo: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              value={memberForm.email}
              onChange={(e) => setMemberForm({ ...memberForm, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Address"
              value={memberForm.address}
              onChange={(e) => setMemberForm({ ...memberForm, address: e.target.value })}
            />
            <button className="btn btn-primary mt-3" onClick={handleSaveMember}>
              {isUpdateMode ? "Update Member" : "Add Member"}
            </button>
            <button
              className="btn btn-secondary mt-2"
              onClick={() => setShowAddPopup(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Delete Confirmation Popup */}
      {confirmDelete && (
        <div className="popup-overlay">
          <div className="popup-content-column">
            <h5>Confirm Delete</h5>
            <p>Are you sure you want to delete "{selectedMember.name}"?</p>
            <div className="delete-popup-buttons">
              <button className="btn btn-secondary" onClick={confirmDeleteCancel}>
                Cancel
              </button>
              <button className="btn btn-danger" onClick={confirmDeleteYes}>
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddMember;