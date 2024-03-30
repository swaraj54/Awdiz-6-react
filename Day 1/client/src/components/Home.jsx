import { useContext } from "react";
import { MyCounterContext } from "./context/CounterContext";
import { AuthContext } from "./context/AuthContext";
import Navbar from "./global/Navbar";

import './../styles/Home.css';

function Home() {
    const { counter, Increment } = useContext(MyCounterContext);
    const { state } = useContext(AuthContext)
    // const { theme } = useContext(ThemeContext)
    console.log(state, "state")
    return (
        // <div style={{ background: theme === light ? "white" : 'black' }}>
        <div id="body">
            <div id="body-nav">
                <div>
                    <p>Home / Clothing / <b>Men T-Shirts</b></p>
                </div>
                <div>
                    <p> <b>Men T-Shirts</b> - 127113 items</p>
                </div>
                <div class="d-flex  jc-between">
                    <div class="w-10">
                        <p><b>FILTERS</b></p>
                    </div>
                    <div class="d-flex w-60 pl-20">
                        <div class="px-10 d-flex ai-center">
                            <p>Bundles
                                <i class="fa-solid fa-angle-down"></i>
                            </p>
                        </div>
                        <div class="px-10">
                            <p>Country
                                <i class="fa-solid fa-angle-down"></i>
                            </p>
                        </div>
                        <div class="px-10">
                            <p>Size
                                <i class="fa-solid fa-angle-down"></i>
                            </p>
                        </div>
                    </div>
                    <div class="b-black w-20 d-flex jc-between px-10 ">
                        <div>
                            <p>Sort by : Recommended</p>
                        </div>
                        <div class="d-flex jc-between ai-center" >
                            <i class="fa-solid fa-angle-down"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div id="body-body">
                <div id="body-body-filters" class="w-100">
                    <div class="b-black w-100 p-30">
                        <p>CATEGORIES</p>
                        <div>
                            <div>
                                <input type="checkbox" /> <span>Tshirts</span>
                            </div>
                            <div>
                                <input type="checkbox" /> <span>Longue Tshirts</span>
                            </div>
                        </div>
                    </div>
                    <div class="b-black w-100 p-30" >
                        <p>BRAND</p>
                        <div>
                            <div>
                                <input type="checkbox" /> <span>Tshirts</span>
                            </div>
                            <div>
                                <input type="checkbox" /> <span>Longue Tshirts</span>
                            </div>
                            <div>
                                <input type="checkbox" /> <span>Tshirts</span>
                            </div>
                            <div>
                                <input type="checkbox" /> <span>Longue Tshirts</span>
                            </div>
                            <div>
                                <input type="checkbox" /> <span>Tshirts</span>
                            </div>
                            <div>
                                <input type="checkbox" /> <span>Longue Tshirts</span>
                            </div>
                        </div>
                    </div>
                    <div class="b-black w-100 p-30">
                        <p>PRICE</p>
                        <div>
                            <div>
                                <input type="checkbox" /> <span>Tshirts</span>
                            </div>
                            <div>
                                <input type="checkbox" /> <span>Longue Tshirts</span>
                            </div>
                        </div>
                    </div>
                    <div class="b-black w-100 p-30">
                        <p>COLOR</p>
                        <div>
                            <div>
                                <input type="checkbox" /> <span>Tshirts</span>
                            </div>
                            <div>
                                <input type="checkbox" /> <span>Longue Tshirts</span>
                            </div>
                            <div>
                                <input type="checkbox" /> <span>Tshirts</span>
                            </div>
                            <div>
                                <input type="checkbox" /> <span>Longue Tshirts</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="body-body-products" class="pl-20">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}


export default Home;