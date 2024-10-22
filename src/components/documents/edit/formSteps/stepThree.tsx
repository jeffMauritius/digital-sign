"use client"

import React from "react"
import AddFields from "./addFields"

export function StepThree(props: any) {
  return (
    <div>
      <h1>Ajouter des champs</h1>
      <p>Ajouter tous les champs pertinents pour chaque destinataire.</p>
      <div className="-mx-2 flex-1 overflow-y-auto px-2 pt-5">
        <fieldset className="my-2 grid grid-cols-3 gap-4">
          <AddFields />
        </fieldset>
      </div>
    </div>
  )
}
