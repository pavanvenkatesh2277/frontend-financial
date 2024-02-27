import React, { useEffect, useState } from "react";
import ListCompanyService from "../service/ListCompanyService";


const Listcompany = () => {
  const [companyArray, setCompanyArray] = useState([]);
  useEffect(() => {
    ListCompanyService.getAllcompanys().then((Response) => {
      setCompanyArray(Response.data);
      console.log("response recevied from APi", Response.data);
    });
  }, []);
  //const [state variable,function that canListinvestors chnage the state variable]
  return (
    <div className="container">
      {console.log("application render")}
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            <h3>Future Finance</h3>
          </a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#companys">
                  Companys
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Mutual Funds">
                  Mutual Funds
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Thematic Funds">
                  Thematic Funds
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Investors">
                  Investors
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h2 className="text-center">Company Data Data</h2>
      <div className="py-4">
        <table className="table table-striped border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Company Name</th>
              <th scope="col">Fund type</th>
              <th scope="col">Address</th>
              <th scope="col">Email Id</th>
              <th scope="col">Contact</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {companyArray.map((company, key) => (
              <tr key={key}>
                <td>{company.id}</td>
                <td>{company.name}</td>
                <td>{company.fundtype}</td>
                <td>{company.address}</td>
                <td>{company.email}</td>
                <td>{company.contact}</td>
                <td>
                    <button className="btn btn-primary mx-2">View</button>
                    <button className="btn btn-outline-primary mx-2">Edit</button>
                    <button className="btn btn-danger mx-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Listcompany;
