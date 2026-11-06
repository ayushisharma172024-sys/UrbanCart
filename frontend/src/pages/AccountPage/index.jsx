import React from 'react';
import Header from '../../components/common/Header';
import BottomNav from '../../components/common/BottomNav';
import ProfileHeader from '../../components/account/ProfileHeader';
import ActiveOrderTracker from '../../components/account/ActiveOrderTracker';
import AccountLinks from '../../components/account/AccountLinks';

const AccountPage = () => {
  return (
    <div className="bg-surface min-h-screen flex flex-col font-body-md text-on-surface antialiased">
      <Header title="Account" />

      <main className="w-full flex-1 bg-surface pt-24 pb-28">
        <div className="flex flex-col w-full px-margin pb-6 gap-space-lg">
          {/* Profile Header Bento Card */}
          <ProfileHeader />

          {/* Active Order Status & Live Tracking Card */}
          <ActiveOrderTracker />

          {/* VIP Concierge Banner & Account Links */}
          <AccountLinks />
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default AccountPage;

