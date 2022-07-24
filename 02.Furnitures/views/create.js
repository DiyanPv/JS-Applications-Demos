import { html, render } from "../node_modules/lit-html/lit-html.js"

const main = document.querySelector(`.container`);
import { createRecord } from "../data.js";
import page from "../node_modules/page/page.mjs"
export const createPage = async (data) => {
    main.innerHTML = createTemplate();
    postCreate()
}

const createTemplate = () => `<div class="row space-top">
<div class="col-md-12">
    <h1>Create New Furniture</h1>
    <p>Please fill all fields.</p>
</div>
</div>
<form>
<div class="row space-top">
    <div class="col-md-4">
        <div class="form-group">
            <label class="form-control-label" for="new-make">Make</label>
            <input class="form-control valid" id="new-make" type="text" name="make">
        </div>
        <div class="form-group has-success">
            <label class="form-control-label" for="new-model">Model</label>
            <input class="form-control is-valid" id="new-model" type="text" name="model">
        </div>
        <div class="form-group has-danger">
            <label class="form-control-label" for="new-year">Year</label>
            <input class="form-control is-invalid" id="new-year" type="number" name="year">
        </div>
        <div class="form-group">
            <label class="form-control-label" for="new-description">Description</label>
            <input class="form-control" id="new-description" type="text" name="description">
        </div>
    </div>
    <div class="col-md-4">
        <div class="form-group">
            <label class="form-control-label" for="new-price">Price</label>
            <input class="form-control" id="new-price" type="number" name="price">
        </div>
        <div class="form-group">
            <label class="form-control-label" for="new-image">Image</label>
            <input class="form-control" id="new-image" type="text" name="img">
        </div>
        <div class="form-group">
            <label class="form-control-label" for="new-material">Material (optional)</label>
            <input class="form-control" id="new-material" type="text" name="material">
        </div>
        <input type="submit" class="btn btn-primary" value="Create" />
    </div>
</div>
</form>`

async function postCreate() {
    const form = document.querySelector(`form`);
    form.addEventListener(`submit`, (e) => {
        e.preventDefault();
        let make = document.getElementById(`new-make`).value;
        let model = document.getElementById(`new-model`).value;
        let year = document.getElementById(`new-year`).value;
        let description = document.getElementById(`new-description`).value;
        let img = document.getElementById(`new-image`).value;
        let material = document.getElementById(`new-material`).value;
        let price = document.getElementById(`new-price`).value;

        if (make != `` && model != `` && year != `` && description != `` && img != `` || material != `` && price != ``) {

            createRecord({
                make,
                model,
                year,
                description,
                price,
                img,
                material
            })



            page.redirect(`/`)

        }

    })
}