import React, { Component } from 'react'
import { API_URL } from '../utils/constants'
import axios from 'axios'
import { Table } from 'react-bootstrap'

export default class ListPesanans extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pesanans: []
    }
  }

  componentDidMount() {
    axios
      .get(API_URL + "pesanans")
      .then(res => {
        console.log("Response : ", res)
        const pesanans = res.data;
        this.setState({ pesanans });
      })
      .catch(error => {
        console.log(error);
      })
  }
  render() {
    const { pesanans } = this.state
    return (
      <div className="mt-4 mb-8 text-center">
      <h4>
          <strong>Daftar Pesanan</strong>
      </h4>

      <div className="mt-4 ">
      {
                        pesanans && pesanans.map((pesanan) => (
                          <Table striped bordered hover>
            
                          <thead>
                              <tr>
                                  <th>ID</th>
                                  <th>First Name</th>
                                  <th>Last Name</th>
                                  <th>Username</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>{pesanan.id}</td>
                                  <td>{pesanan.total_bayar}</td>
                                  <td>{pesanan.menus.keterangan}</td>
                                  
                              </tr>
                              
                            
                          </tbody>
                      </Table>

                        ))
                    };
      </div>
  </div>
    )
  }
}
