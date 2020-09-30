import React from "react"
import { Form, Button } from 'react-bootstrap'
import PrimaryLayout from '../layouts/PrimaryLayout'
export default () => (
  <PrimaryLayout>
    <div className="col-12 col-lg-6">
      <div className="pt-5">
        <h1>Contact us</h1>
        <Form>
          <Form.Group controlId="contactForm.email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group controlId="contactForm.subject">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="subject..." />
          </Form.Group>
          <Form.Group controlId="contactForm.message">
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Form.Group controlId="contactForm.submit">
            <Button>Submit</Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  </PrimaryLayout>
)
