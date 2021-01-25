import React from 'react';
import SimpleViewCard from "../SimpleViewCard/SimpleViewCard";
import './AllSimpleViews.css';


function AllSimpleViews({lendings,assets,payments,dexes,derivatives}) {

    return (
        <div className="All_simple_views">
            <div className="container-fluid">
                <div className="row">

                    <div className="col-lg-6">
                    <SimpleViewCard  title={'Top 5 Defi Lending'} description={'Top 5 defi apps based on Lending'} type={lendings} name='lendings'/>                        

                    </div>

                   

                    <div className="col-lg-6">
                    <SimpleViewCard  title={'Top 5 Defi Assets'} description={'Top 5 defi apps based on Assets'} type={assets} name='assets'/>                        

                    </div>

                    <div className="col-lg-6">
                    <SimpleViewCard  title={'Top 5 Defi Payments'} description={'Top 5 defi apps based on Payments'} type={payments} name='payments'/>                        

                    </div>

                    <div className="col-lg-6">
                    <SimpleViewCard  title={'Top 5 Defi Dexes'} description={'Top 5 defi apps based on Dexes'} type={dexes} name="dexes"/>                        

                    </div>

                    <div className="col-lg-6">
                    <SimpleViewCard  title={'Top 5 Defi Derivatives'} description={'Top 5 defi apps based on Derivatives'} type={derivatives} name="derivatives"/>                        

                    </div>

                </div>

            </div>

            
        </div>
    )
}

export default AllSimpleViews
