"use client"

import React, { Component } from "react"

import Document from "@/interfaces/document.interface"

interface ContextState {
  documents: typeof documentsInitialState
  dispatch: (action: any) => void
}

const Context = React.createContext<ContextState | undefined>(undefined)

const documentsInitialState = {
  documentName: "",
  documentID: "",
  newDocument: {},
}

const initialState = {
  documents: documentsInitialState,
}

const reducer = (
  state: { subscription: Document; [key: string]: any },
  action: any,
) => {
  switch (action.type) {
    case "SET_DOCUMENT_NAME":
      return {
        ...state,
        documentName: action.payload,
      }
    case "SET_NEW_DOCUMENT": {
      return {
        ...state,
        newDocument: action.payload,
      }
    }
    case "SET_NEW_DOCUMENT_PDF": {
      return {
        ...state,
        newDocumentPdf: action.payload,
      }
    }
    case "SET_TYPE_OF_FUNNEL":
      return {
        ...state,
        typeOfFunnel: action.payload,
      }
    case "SET_REFERRAL":
      return {
        ...state,
        referral: {
          ...state.referral,
          ...action.payload,
        },
      }
    default:
      return state
  }
}

interface ProviderProps {
  children: React.ReactNode
}

export class Provider extends Component<ProviderProps> {
  state = {
    ...initialState,
    dispatch: (action: any) => {
      this.setState(state =>
        reducer(
          state as {
            subscription: Document
            [key: string]: any
          },
          action,
        ),
      )
    },
  }

  render() {
    const { children } = this.props
    console.log("CONTEXT", this.state)
    return <Context.Provider value={this.state}>{children}</Context.Provider>
  }
}

export const { Consumer } = Context
