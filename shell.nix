let
nixpkgs = import (builtins.fetchTarball https://github.com/NixOS/nixpkgs/archive/20.03.tar.gz) {
  overlays = [];
  config = {};
};

installNodeJS = import (./nodejs.nix) {
  inherit nixpkgs;
  version = "13.6.0";
  sha256 = "${if nixpkgs.stdenv.isDarwin then "0z64v76w8x02yg2fz2xys580m9mlwklriz1s5b0rxn569j4kwiya" else "166pm67i7qys3x6x1dy5qr5393k0djb04ylgcg8idnk7m0ai7w00"}";
};
frameworks = nixpkgs.darwin.apple_sdk.frameworks;


in
with nixpkgs;

stdenv.mkDerivation {
  name = "nodejs-env";
  buildInputs = [ installNodeJS ];

  nativeBuildInputs = [
    zsh
    vim
  ] ++ (
    stdenv.lib.optionals stdenv.isDarwin [
      frameworks.Security
      frameworks.CoreServices
      frameworks.CoreFoundation
      frameworks.Foundation
    ]
  );

  # Post Shell Hook
  shellHook = ''
  '';
}
