# Society Card Photography

The society cards use locally stored contextual photographs to represent each technical field. These are illustrative stock photos, not official IEEE society images or endorsements. The cards do not use society icons or generated artwork.

### Recommended Specifications:
- **Aspect Ratio**: 16:9 landscape
- **Resolution**: 1200×675px or higher (JPG, PNG, or WebP)
- **Style**: Documentary-style photography related to the society's field; avoid logos, icon art, and abstract decoration.

### Suggested File Mapping for `lib/data.ts`:
| Society | File | `image` path in `lib/data.ts` | Unsplash photo ID |
|---|---|---|
| IEEE Computer Society | `cs.jpg` | `/images/societies/cs.jpg` | `photo-1498050108023-c5249f4df085` |
| IEEE Robotics & Automation Society | `ras.jpg` | `/images/societies/ras.jpg` | `photo-1485827404703-89b55fcc595e` |
| IEEE Computational Intelligence Society | `cis.jpg` | `/images/societies/cis.jpg` | `photo-1518770660439-4636190af475` |
| IEEE Engineering in Medicine & Biology | `embs.jpg` | `/images/societies/embs.jpg` | `photo-1576091160399-112ba8d25d1d` |
| IEEE Women in Engineering (WIE) | `wie.jpg` | `/images/societies/wie.jpg` | `photo-1581091226825-a6a2a5aee158` |
| IEEE Power & Energy Society | `pes.jpg` | `/images/societies/pes.jpg` | `photo-1473341304170-971dccb5ac1e` |
| IEEE Communications Society | `comsoc.jpg` | `/images/societies/comsoc.jpg` | `photo-1558494949-ef010cbdcc31` |
| IEEE Education Society | `edu.jpg` | `/images/societies/edu.jpg` | `photo-1503676260728-1c00da094a0b` |
| IEEE Signal Processing Society | `sps.jpg` | `/images/societies/sps.jpg` | `photo-1598488035139-bdbb2231ce04` |
| IEEE Humanitarian Technology (SIGHT) | `sight.jpg` | `/images/societies/sight.jpg` | `photo-1488521787991-ed7bbaae773c` |

Update the required `image` path on the matching society record in `lib/data.ts` when replacing a photo. Keep imagery relevant to the society and ensure the crop still shows its subject at card size.
