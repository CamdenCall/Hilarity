import "./Stats.scss"

const Stats = () => {
    return (
      <section className="stats">
        <h2 className="gradient">Our Statistics</h2>
        <div className="cards">
            <div className="card">
                <div className="icon">
                    <img src="/images/sales.svg" />
                </div>
                <div className="-s32 -w600 -italic">500,000</div>
                <div className="-s16">Sales</div>
            </div>
            <div className="card">
                <div className="icon">
                    <img src="/images/favorite.svg" />
                </div>
                <div className="-s32 -w600 -italic">30,000</div>
                <div className="-s16">Favorites</div>
            </div>
            <div className="card">
                <div className="icon">
                    <img src="/images/staff.svg" />
                </div>
                <div className="-s32 -w600 -italic">10</div>
                <div className="-s16">Staff Members</div>
            </div>
            
        </div>
      </section>
    );
  };
  
export default Stats;