import React from "react";
import { Badge } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import './App.css';

function App() {
  return (
    <div className="example">
      <Badge>Primary</Badge>
      <Badge theme="secondary">Secondary</Badge>
      <Badge theme="success">Success</Badge>
      <Badge theme="info">Info</Badge>
      <Badge theme="warning">Warning</Badge>
      <Badge theme="danger">Danger</Badge>
      <Badge theme="light">Light</Badge>
      <Badge theme="dark">Dark</Badge>
    </div>
  );
}

export default App;
