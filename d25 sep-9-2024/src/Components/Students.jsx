
const Students = ({name, gender, company, email, phone, address}) => {
    return (
        <>
            <h1>Name : {name}</h1>
            <p>Gender: {gender}</p>
            <p>Company: {company}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Address: {address}</p>
        </>
    );
};

export default Students;