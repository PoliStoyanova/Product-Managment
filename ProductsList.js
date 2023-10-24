import React, { useState } from "react";

export default function ProductsList ({ notes, onDelete, onEdit }) {
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-12">
                    <table>
                        <thead>
                            <td>Ид</td>
                            <td>Име на продукта</td>
                            <td>Цена на продукта</td>
                            <td>Количество</td>
                            <td>Описание</td>
                            <td>Действия</td>
                        </thead>
                        <tbody>
                            <tr></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}