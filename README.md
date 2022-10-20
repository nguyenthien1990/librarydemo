# galaxy_pay

A new Flutter plugin for galaxy pay.

## Integrate with parent app
1, Import galaxy_pay on pubspec(local, gitlab)
```
  galaxy_pay:
    # When depending on this package from a real application you should use:
    #   galaxy_pay: ^x.y.z
    # See https://dart.dev/tools/pub/dependencies#version-constraints
    # The example app is bundled with the plugin so we use a path dependency on
    # the parent directory to use the current plugin's version.

```
2, Init dependencies of galaxy pay
add this code on main:
```
WidgetsFlutterBinding.ensureInitialized();
await initializeDependencies();
```
3, Other Config
Config for camera permission
```
    https://pub.dev/packages/camera
```
Contact:
https://pub.dev/packages/contacts_service

qr_code_scanner
https://pub.dev/packages/qr_code_scanner

image_picker
https://pub.dev/packages/image_picker

4, Bloc
```
MultiBlocProvider(
        providers: [
          BlocProvider(create: (context) => CardCubit())
        ],
        child: MyApp(),
    )

```
5, Support I18N
```
      localizationsDelegates: [
        ...
        GPayLocalizations.delegate
      ],
```

## Design System
_gpw_bottom_sheet.dart_ : Bottomsheet Wrap content height
-gpw_app_bar.dart_: AppBar
_gpw_button_widget.dart_: Button Outline with icons
-gpw_tab_bar.dart_: Tabbar

## Design System
_gpw_bottom_sheet.dart_ : Bottomsheet Wrap content height
-gpw_app_bar.dart_: AppBar
_gpw_button_widget.dart_: Button Outline with icons
-gpw_tab_bar.dart_: Tabbar

## Structure
- assets
  - icons: start with ic_
  - images: start with image_
- lib
    - __data__
        - _blocs_: Bloc on this applocation
        - _datasources_: Data provider
        - _dto_: Model Data, suffix: *_dto*
        - _repositories_: list of repository
    - __gen__: Gen Assets Management
    - __domain__
        - __model__: Model in domain layer, suffix: *_model*
        - __repository__: repository in domain layer
    - __pages__: Screen, Page of Application, suffix: *_page*
    - __utils__
    - __env__: config env
    - __widgets__: Component reuse on this app, suffix: *_widget*
    - __initialize_dependencies.dart__: init dependencies global as local service, bloc, domain repository

## Dependencies
Init all dependencies global on  `initialize_dependencies.dart`

example: `LocalService`, `Repository_` of domain layer.
## Resource Manager
```
https://pub.dev/packages/flutter_gen
```
### Homebrew
Works with MacOS and Linux.
```sh
$ brew install FlutterGen/tap/fluttergen
```
### Pub Global
Works with MacOS, Linux and Windows.
```sh
$ dart pub global activate flutter_gen
```
### Generate Model and State
```sh
$ flutter pub run build_runner build
```

## Extension
_path: lib/utils/extensions.dart_

### BuildContext
```
extension StateExtensions on State {
  ThemeData get theme => Theme.of(context);

  TextTheme get textTheme => Theme.of(context).textTheme;

  TextTheme get primaryTextTheme => Theme.of(context).primaryTextTheme;

  TextTheme get accentTextTheme => Theme.of(context).accentTextTheme;

  ColorScheme get colorScheme => Theme.of(context).colorScheme;

  MediaQueryData get mediaQueryData => MediaQuery.of(context);

  Size get size => MediaQuery.of(context).size;
}
```
### State
```
extension ContextExtensions on BuildContext {
  ThemeData get theme => Theme.of(this);

  TextTheme get textTheme => Theme.of(this).textTheme;

  TextTheme get primaryTextTheme => Theme.of(this).primaryTextTheme;

  TextTheme get accentTextTheme => Theme.of(this).accentTextTheme;

  ColorScheme get colorScheme => Theme.of(this).colorScheme;

  MediaQueryData get mediaQueryData => MediaQuery.of(this);

  Size get size => MediaQuery.of(this).size;
}
```

### I18N
Update content at:

```
lib/l10n/arb/gpay_app_*.arb
```

Run this shell to generate class:

```
bash i18n.sh
```

Usage:

```
GPayLocalizations.of(context).topupTitle
```

## Utils

### Generate Model
```
pub run build_runner build --delete-conflicting-outputs
```

Or

```
 bash gen.sh
```

flutter gen-l10n --arb-dir=lib/l10n/arb --output-dir=lib/l10n --template-arb-file=gpay_app_en.arb --output-localization-file=gpay_localizations.dart --output-class=GPayLocalizations --no-synthetic-package
