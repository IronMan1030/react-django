import React from "react";

import StickerCard from "../../components/Widgets/StickerCard/StickerCard";
import ColumnChart from "../../components/Widgets/ColumnChart/ColumnChart";

import { CoinIcon } from "../../assets/icons/CoinIcon";
import { CartIconBig } from "../../assets/icons/CartIconBig";
import { UserIcon } from "../../assets/icons/UserIcon";
import { DeliveryIcon } from "../../assets/icons/DeliveryIcon";

function Dashboard() {
  return (
    <div>
      <div className="row mb-3">
        <div className="col-lg-3">
          <StickerCard
            title="Total Revenue"
            subtitle="(Last 30 Days)"
            icon={<CoinIcon />}
            price="$711.66"
            indicator="up"
            indicatorText="Revenue up"
            note="(previous 30 days)"
            link="#"
            linkText="Full Details"
          />
        </div>
        <div className="col-lg-3">
          <StickerCard
            title="Total Order"
            subtitle="(Last 30 Days)"
            icon={<CartIconBig />}
            price="88,568"
            indicator="down"
            indicatorText="Order down"
            note="(previous 30 days)"
            link="#"
            linkText="Full Details"
          />
        </div>
        <div className="col-lg-3">
          <StickerCard
            title="New Customer"
            subtitle="(Last 30 Days)"
            icon={<UserIcon />}
            price="5,678"
            indicator="up"
            indicatorText="Customer up"
            note="(previous 30 days)"
            link="#"
            linkText="Full Details"
          />
        </div>
        <div className="col-lg-3">
          <StickerCard
            title="Total Delivery"
            subtitle="(Last 30 Days)"
            icon={<DeliveryIcon />}
            price="78,000"
            indicator="up"
            indicatorText="Delivery up"
            note="(previous 30 days)"
            link="#"
            linkText="Full Details"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ColumnChart
            widgetTitle="Sale History"
            colors={["#03D3B5"]}
            prefix="$"
            totalValue="1,92,564"
            position="up"
            percentage="1.38%"
            text="More than last year"
            series={[44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65]}
            categories={[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
