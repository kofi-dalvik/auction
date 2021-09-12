import {useState, useEffect} from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import PropTypes from 'prop-types';

function ItemFilters(props) {
    const [keyword, setKeyword] = useState('');
    const [sortPrice, setSortPrice] = useState('any');

    const { setParams } = props;

    useEffect(() => {
        setParams({
            sort_price: sortPrice,
            keyword: keyword
        });

    }, [keyword, sortPrice, setParams])

    return (
        <div className="row justify-content-between mb-4">
            <div className="col-md-3 col-12">
                <div className="form-group elevation">
                    <label htmlFor="username" className="form-label">Sort Price</label>
                    <select
                        value={sortPrice}
                        onChange={(e) => setSortPrice(e.target.value)}
                        className="form-control">
                        <option value="any">Any</option>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
            </div>
            <div className="col-md-4 col-12">
                <div className="form-group font-small">
                    <label className="form-label">Search items by keyword</label>
                    <div className="input-group">
                        <input
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="keyword"
                        />
                        <div className="input-group-append">
                            <button className="btn btn-primary pl-3 pr-3" type ="button">
                                <BiSearchAlt />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ItemFilters.propTypes = {
    setParams: PropTypes.func.isRequired
}

export default ItemFilters
