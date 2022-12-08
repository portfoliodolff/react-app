import React, { Component } from 'react'
import { Button, Image, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ListPesanans from '../components/ListPesanans'
export default class Pesanan extends Component {
    render() {
        return (
           <ListPesanans/>
        )
    }
}
