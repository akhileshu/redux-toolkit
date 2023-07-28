import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useAddAccountMutation,
  useDeleteAccountMutation,
  useGetAccountsQuery,
  useUpdateAccountMutation,
} from "../api/adminSlice";

function Admin() {
  const { data, error, isLoading, isSuccess } = useGetAccountsQuery();
  const [addAccount, response] = useAddAccountMutation();
  const [deleteAccount] = useDeleteAccountMutation();
  const [updateAccount] = useUpdateAccountMutation();

  return (
    <div>
      <h2>Admin</h2>
      {isLoading && <p>Loading...</p>}
      {isSuccess && data &&
        data.map((account) => {
          return (
            <>
              {account.id} : {account.amount}{" "}
              <button onClick={() => deleteAccount(account.id)}>
                deleteAccount
              </button>{" "}
              <button
                onClick={() => updateAccount({ amount: 777, id: account.id })}
              >
                updateAccount
              </button>
              <hr />
            </>
          );
        })}
      <button onClick={() => addAccount(101, data.lenght + 1)}>
        addAccount
      </button>
    </div>
  );
}

export default Admin;
