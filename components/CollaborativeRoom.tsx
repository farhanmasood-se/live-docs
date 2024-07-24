'use client';

import { RoomProvider, ClientSideSuspense } from '@liveblocks/react/suspense';
import Loader from './Loader';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from '@clerk/nextjs';
import Header from './Header';

const CollaborativeRoom = () => {
  return (
    <RoomProvider id="my-room">
      <ClientSideSuspense fallback={<Loader />}>
        <Header>
          <div className="flex w-fit items-center justify-center gap-2">
            <p className="document-title">Share</p>
          </div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <SignOutButton />
          </SignedIn>
        </Header>
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default CollaborativeRoom;
