import { Body, Heading, OverlineSmall } from "../../ui/Theme/SkyStrife/Typography";
import { Modal } from "../Modal";
import { Button } from "../../ui/Theme/SkyStrife/Button";
import * as Dialog from "@radix-ui/react-dialog";

export function AnnouncementModal() {
  return (
    <div className="fixed top-0x left-1/3 uppercase z-50 w-fit px-4 mt-3 flex items-center">
      new update! <div className="w-3" />
      <Modal
        footer={
          <Dialog.Close asChild={true} className="w-fit">
            <Button className="mx-auto" buttonType={"primary"}>
              start playing
            </Button>
          </Dialog.Close>
        }
        title="announcements"
        trigger={<Button buttonType={"tertiary"}>read patch notes</Button>}
      >
        <Heading>New units, combat redesign, and more!</Heading>
        <OverlineSmall>Feb 23rd, 2024</OverlineSmall>

        <Heading className="mt-6 mb-4 font-bold text-ss-text-default">COUNTERS</Heading>
        <ul className="list-disc list-inside text-ss-text-light">
          <li>
            Each unit type (Swordsman, Archer, etc.) now has a set of advantages and disadvantages against other units
          </li>
          <li>
            These damage multipliers range anywhere from{" "}
            <span className="font-bold text-ss-text-default">0.5x to 2.5x</span> damage!
          </li>
          <li>
            For example, <span className="font-bold text-ss-text-default">Knights</span> now one-shot-kill{" "}
            <span className="font-bold text-ss-text-default">Archers</span> and{" "}
            <span className="font-bold text-ss-text-default">Pillagers</span>, and{" "}
            <span className="font-bold text-ss-text-default">Archers</span> now one-shot-kill{" "}
            <span className="font-bold text-ss-text-default">Swordsmen</span>!
          </li>
        </ul>
        <Body className="mt-4">See below for a detailed look at how units counter each other! </Body>
        <div className="px-8 py-4">
          <img src="/public/assets/rps-diagram.png" alt="Rock-Paper-Scissors Unit Diagram" />
        </div>

        <Heading className="mt-6 mb-4 font-bold text-ss-text-default">NEW UNITS</Heading>
        <div className="text-ss-text-light">
          <p>
            <span className="font-bold text-ss-text-default">The Brute</span>: The second most expensive unit, slow,
            tanky, and very strong against all other melee units (especially Swordsmen and Knights). Very vulnerable to
            Archers and Catapults.
          </p>
          <div className="px-8 py-4">
            <img src="/public/assets/brute.png" alt="Brute sprite" />
          </div>
          <p>
            <span className="font-bold text-ss-text-default">The Catapult</span>: The most expensive unit, slow, not so
            tanky, and can attack only while stationary. Vulnerable to Pillagers and Knights but strongest against
            Brutes and Structures.
          </p>
          <div className="px-8 py-4">
            <img src="/public/assets/catapult.png" alt="Catapult sprite" />
          </div>
        </div>

        <Heading className="mt-6 mb-4 font-bold text-ss-text-default">LATENCY IMPROVEMENTS</Heading>
        <p className="text-ss-text-light">
          Making the game a better experience for players all across the globe is a high priority for us, so we&apos;ve
          upgraded the client in a way that will reduce the competitive edge that players with low ping have over
          players with high ping.
        </p>

        <Heading className="mt-6 mb-4 font-bold text-ss-text-default">UI IMPROVEMENTS</Heading>
        <div className="mt-6 mb-4 text-ss-text-light">
          <p className="text-ss-text-default mb-2 font-medium">Combat preview</p>
          <ul className="list-disc list-inside">
            <li>See a flashing skull when an attacker or defender will die from an attack.</li>
            <li>See an up or down arrow based on whether an attack is advantageous or disadvantageous.</li>
            <li>See the armor bonus units receive from the terrain they&apos;re standing on</li>
            <li>New health bars that will improve their legibility</li>
          </ul>
          <p className="text-ss-text-default mb-2 mt-4 font-medium">Unit/Structure Inspect Panel</p>
          <ul className="list-disc list-inside">
            <li>See terrain bonuses a unit currently has.</li>
            <li>See whether or not a unit is ready to move + attack!</li>
            <li>See health remaining on units and structures, and gold remaining on structures</li>
          </ul>
        </div>
        <div className="px-8 py-4">
          <img src="/public/assets/combat-ui.gif" alt="a GIF of a combat preview" />
        </div>

        <Heading className="mt-6 mb-4 font-bold text-ss-text-default">OTHER CHANGES</Heading>
        <div className="mt-6 mb-4 text-ss-text-light">
          <ul className="list-disc list-inside ml-4">
            <li>
              Gold amounts, across the board, were reduced by 4x for simplicity (e.g., a unit costing 400g is now 100g,
              mines giving 200g is now 50g, etc.).
            </li>
            <li>Each hero has been assigned a class so that its damage multipliers align with units:</li>
            <li>Pikeman → Halberdier (Anti-cavalry)</li>
            <li>Archer → Marksman (Ranged infantry)</li>
            <li>Knight → Dragoon (Cavalry)</li>
          </ul>
        </div>
      </Modal>
    </div>
  );
}
