import './addItem.css';

const AddItem = () => {
    return (
        <div className="add-item-container">
            <div class="container-fluid">
                <section>
                    <div class="row">
                        <div class="col-md-12 col-sm-12 add-item">
                            <div class="text-center">
                                <h4 class="text-light text-center add-item-text">
                                    ADD AN ITEM
                                </h4>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="row">
                    <div class=" col-md-12 col-sm-12">
                        <form class=" col-md-4 offset-md-4  ">
                            <div class="form-group">
                                <label
                                    for="formGroupExampleInput "
                                    class="form-title"
                                >
                                    {' '}
                                    Title
                                </label>
                                <input
                                    class="form-control"
                                    id="formGroupExampleInput"
                                    placeholder="Example input"
                                />
                            </div>
                            <div class="form-group">
                                <label
                                    for="exampleFormControlTextarea1 "
                                    class="form-title"
                                >
                                    Description
                                </label>
                                <textarea
                                    class="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                ></textarea>
                            </div>
                            <div class="form-group">
                                <label
                                    for="formGroupExampleInput2 "
                                    class="form-title"
                                >
                                    Price
                                </label>
                                <input
                                    class="form-control"
                                    id="formGroupExampleInput2"
                                    placeholder="Another input"
                                />
                            </div>
                            <div class="form-group">
                                <label
                                    for="exampleFormControlSelect1 "
                                    class="form-title"
                                >
                                    {' '}
                                    Category
                                </label>
                                <select
                                    class="form-control"
                                    id="exampleFormControlSelect1"
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label
                                    for="exampleFormControlSelect1 "
                                    class="form-title"
                                >
                                    Sub-Category
                                </label>
                                <select
                                    class="form-control"
                                    id="exampleFormControlSelect1"
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label
                                    for="exampleFormControlSelect1 "
                                    class="form-title"
                                >
                                    Color
                                </label>
                                <select
                                    class="form-control"
                                    id="exampleFormControlSelect1"
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label
                                    for="exampleFormControlSelect1 "
                                    class="form-title"
                                >
                                    Size
                                </label>
                                <select
                                    class="form-control"
                                    id="exampleFormControlSelect1"
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label
                                    for="exampleFormControlFile1 "
                                    class="form-title"
                                >
                                    Images
                                </label>
                                <input
                                    type="file"
                                    class="form-control-file"
                                    id="exampleFormControlFile1"
                                ></input>
                            </div>

                            <button type="button" class="btn edit col-md-12 ">
                                Upload
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddItem;
