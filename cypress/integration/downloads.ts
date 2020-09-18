const URL_START = 'https://downloads.actyx.com/';
const URL_STORAGE = 'https://axartifacts.blob.core.windows.net/artifacts/';

const FOLDER = {
  win64: '/win64/',
  mac: '/mac/',
  x64: '/x64/',
  aarch64: '/aarch64/',
  arm: '/arm/',
};

describe('downloads.actyx.com', () => {
  it('should check if artifact files name are valid', () => {
    cy.visit(URL_START);
    cy.get('a').then((x) => {
      const hrefs = x
        .toArray()
        .map((x) => x.href)
        .filter((x) => x !== '')
        .filter((x) => x.startsWith(URL_STORAGE));

      // os android
      const androids = hrefs.filter((x) => x.includes('android'));
      console.log(androids);
      androids.forEach((x) => {
        expect(x.endsWith('actyxos.apk')).to.eq(true);
      });

      // os win
      const win64s = hrefs.filter((x) => x.includes(FOLDER.win64));
      console.log(win64s);
      win64s.forEach((x) => {
        expect(x.endsWith('ax.exe')).to.eq(true);
      });

      // mac ax
      const macs = hrefs.filter((x) => x.includes(FOLDER.mac));
      console.log(macs);
      macs.forEach((x) => {
        expect(x.endsWith('ax')).to.eq(true);
      });

      // ax linux 64
      const linux64s = hrefs.filter((x) => x.includes(FOLDER.x64));
      console.log(linux64s);
      linux64s.forEach((x) => {
        expect(x.endsWith('ax')).to.eq(true);
      });

      // ax aarch64
      const aarch64s = hrefs.filter((x) => x.includes(FOLDER.aarch64));
      console.log(aarch64s);
      aarch64s.forEach((x) => {
        expect(x.endsWith('ax')).to.eq(true);
      });

      // ax arm
      const arm64x = hrefs.filter((x) => x.includes(FOLDER.arm));
      console.log(arm64x);
      arm64x.forEach((x) => {
        expect(x.endsWith('ax')).to.eq(true);
      });
    });
  });
});
