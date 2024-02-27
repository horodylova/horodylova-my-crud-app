import React from "react";
import {DescriptionContainer} from './CRUDDescription.styled';

export const CRUDDescription = () => {
    return (
      <DescriptionContainer>
        <p>
          CRUD, which stands for Create, Read, Update, and Delete, is a set of basic operations commonly used in database management and web development.
          CRUD can be likened to the essential building blocks of a digital world, where you have the power to mold and shape data as you see fit.
        </p>
        <p>
          In the context of an application like ours, which seems to involve managing a table of items, CRUD functionality becomes the backbone of user interaction. Users can create new entries in the table, read existing ones to gather information, update entries to reflect changes, and delete entries that are obsolete or no longer required.
        </p>
        <p>
          For example, in our application, users can:
        </p>
        <ul>
          <li>Create: They can add new items to the table by providing a name and description.</li>
          <li>Read: They can view the existing items in the table along with their details.</li>
          <li>Update: They can modify the details of any item in the table, such as changing its name or description.</li>
          <li>Delete: They can remove items from the table that are no longer needed.</li>
        </ul>
      </DescriptionContainer>
    );
  };
  
  export default CRUDDescription;