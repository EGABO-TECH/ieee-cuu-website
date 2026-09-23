# Ambassador Profile Photos

Place ambassador portrait photos in this directory so students and community members can get to know who the ambassadors are.

### Recommended Specifications:
- **Aspect Ratio**: 1:1 (Square portrait)
- **Resolution**: 400x400px or higher (optimized JPG, PNG, or WebP)
- **Framing**: Clean headshot/portrait on a simple or brand-themed background

### Setup in `lib/data.ts`:
Once you place a photo file here (e.g. `aaron.jpg`), reference it in the `programs` array in `lib/data.ts`:
```ts
{
  name: "Egabo Aaron",
  role: "CUU Campus Ambassador & Community Lead",
  image: "/images/ambassadors/aaron.jpg",
}
```
If `image` is left empty or omitted (`""`), a stylish photo placeholder is automatically shown with the ambassador's initials and photo indicator.
